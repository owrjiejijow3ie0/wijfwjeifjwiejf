import { findByStoreName } from '@vendetta/metro';
import { findInReactTree } from '@vendetta/utils';
import React from 'react'
import StatusIcon from './StatusIcon';
import { getStatusColor } from './colors';
import { ReactNative } from '@vendetta/metro/common';

import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";

export const platformOrder = ["desktop", "embedded", "mobile", "web", "vr"];

const PresenceStore = findByStoreName("PresenceStore");
const SessionsStore = findByStoreName("SessionsStore");
const UserStore = findByStoreName("UserStore");


let statusCache;
let statusCacheHits = 0;
let statusCacheTimeout;
let currentUserId;

function queryPresenceStoreWithCache(){
    if(!statusCacheTimeout){
        statusCacheTimeout = setTimeout(() => {
            statusCacheHits = 0
            statusCacheTimeout = null
        },5000);
    }

    if(!statusCache || statusCacheHits == 0){
        statusCache = PresenceStore.getState()
        //console.log("hit store")
    }

    statusCacheHits = (statusCacheHits+1) % 20

    //console.log("hit")
    return statusCache
}

export function getUserStatuses(userId){
    let statuses;

    if(!currentUserId){
        currentUserId = UserStore.getCurrentUser()?.id
    }

    if(userId == currentUserId){
        statuses = Object.values(SessionsStore.getSessions()).reduce((acc: any, curr: any) => {
            if (curr.clientInfo.client !== "unknown")
                acc[curr.clientInfo.client] = curr.status;
            return acc;
        }, {});
    } else {
        statuses = queryPresenceStoreWithCache()?.clientStatuses[userId]
    }
    return statuses
}

export default function StatusIcons(props) {
    useProxy(storage)

    //const [, forceRender] = React.useReducer(x => ~x, 0)
    const userId = props.userId;

    const iconSize = props.size ?? (props.small ? 17 : 16);

    const statuses = getUserStatuses(userId)
    const platformStatuses = Object.entries(statuses ?? {})
        .sort(([left], [right]) => {
            const leftOrder = platformOrder.indexOf(left);
            const rightOrder = platformOrder.indexOf(right);
            return (leftOrder < 0 ? platformOrder.length : leftOrder) - (rightOrder < 0 ? platformOrder.length : rightOrder);
        });
    return (
        <ReactNative.View style={[{ flexDirection: "row", alignItems: "center" }, props.containerStyle]}>
            {platformStatuses.map(([platform, status], index) => {
                const platformIconSize = props.small && platform === "mobile" ? 14 : iconSize;
                return (
                    <ReactNative.View
                        key={platform}
                        style={{ width: platformIconSize, height: platformIconSize, marginRight: index < platformStatuses.length - 1 ? 2 : 0 }}
                    >
                        <StatusIcon platform={platform} color={getStatusColor(status, storage.fallbackColors)} iconSize={platformIconSize} />
                    </ReactNative.View>
                );
            })}
        </ReactNative.View>
    )
}
