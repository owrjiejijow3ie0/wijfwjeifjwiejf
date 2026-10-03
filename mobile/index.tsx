import { patcher } from "@vendetta";
import { findByDisplayName, findByName, findByProps, findByPropsAll, findByStoreName, findByTypeNameAll, findByTypeName } from "@vendetta/metro";
import {General} from "@vendetta/ui/components"
import { findInReactTree } from "@vendetta/utils";
import StatusIcons, { getUserStatuses, platformOrder } from "./StatusIcons";
import platformBadgeSources from "./platformBadgeSources.json";
import { getAssetByName, getAssetIDByName } from "@vendetta/ui/assets";
import { storage } from "@vendetta/plugin";
import Settings from "./settings";
import React, { useState, useEffect } from 'react';
import RerenderContainer from "./RerenderContainer";
import PresenceUpdatedContainer from "./PresenceUpdatedContainer";
const {Text,View } = General;

let unpatches = [];

//export { default as settings } from "./settings";

export default {
    onLoad: () => {

        storage.dmTopBar ??= true
        storage.userList ??= true
        storage.profileUsername ??= true
        storage.hideMobileStatus ??= false
        storage.fallbackColors ??= false
        storage.oldUserListIcons ??= false
        const debugLabels = false
        const patchAfterIfFound = (method, target, callback) => {
            if (target) unpatches.push(patcher.after(method, target, callback))
        }
        const patchBeforeIfFound = (method, target, callback) => {
            if (target) unpatches.push(patcher.before(method, target, callback))
        }
        const insertStatusIconsAfterName = (root, userId, key) => {
            if (findInReactTree(root, (child) => child?.key === key)) return true;

            const nameContainer = findInReactTree(root, (child) =>
                Array.isArray(child?.props?.children) &&
                child.props.children.some((item) => typeof item === "string" || typeof item?.props?.children === "string")
            );
            if (!nameContainer) return false;

            const nameChildren = nameContainer.props.children;
            const nameIndex = nameChildren.findIndex((item) =>
                typeof item === "string" || typeof item?.props?.children === "string"
            );
            if (nameIndex === -1) return false;

            const findChildPosition = (element) => {
                const children = element?.props?.children;
                if (!Array.isArray(children)) return null;

                const index = children.findIndex((item) => item?.type?.Types && item.props?.type === 0);
                if (index !== -1) return { children, index };

                for (const child of children) {
                    const position = findChildPosition(child);
                    if (position) return position;
                }

                return null;
            };
            const serverTagPosition = findChildPosition(nameContainer);
            const insertionPosition = serverTagPosition ?? { children: nameChildren, index: nameIndex };

            insertionPosition.children.splice(insertionPosition.index + 1, 0,
                <View key={key} style={{ flexDirection: "row", alignItems: "center", marginLeft: 2 }}>
                    {debugLabels ? <Text>{key}</Text> : <StatusIcons userId={userId} small />}
                </View>
            );
            return true;
        };

        //spagetti code ahead
        //i'm sorry for whoever has to interpret this

        //Big view patch
        /*unpatches.push(patcher.after("render",View,(_,res) => {
            return;
            if(storage.dmTopBar){

                const textChannel = findInReactTree(res, r => r?.props?.children[1]?.type?.name == "ChannelActivity" && r?.props?.children[1]?.props?.hasOwnProperty?.("userId"))
                if(!textChannel)return;
                if(textChannel.props?.children?.length != 2) return;
                if(textChannel.props?.children[0]?.props?.children?.length != 2) return;
                
                const target = textChannel.props?.children[0]?.props?.children
                if(target.filter(m => m?.props?.userId).length == 2){
                    const target2 = target[1]
                    const uid = target2.props?.userId;
                    if(!uid) return;
                    patcher.after("type",target2,(args,res) => {
                        //console.log("SSSSSS",args,res)
                        if(!findInReactTree(res, m => m.key == "StatusIcons")){
                            res = <View style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    {res}
                                    <PresenceUpdatedContainer key="StatusIcons">
                                        {debugLabels ? <Text>DTB1</Text> : <StatusIcons userId={uid}/>}
                                    </PresenceUpdatedContainer>
                                </View>
                        }
                        return res
                    })
                }
            }
        }))*/



        //Big pressable patch
        /*const Pressable = findByDisplayName("Pressable",false); //importing from ReactNative doesn't work
        unpatches.push(patcher.before("render",Pressable.default.type,(args)=>{
            if(!args) return;
            if(!args[0]) return;
            const [ props ] = args;
            if(!props) return;


            // tabs v2 DM list (current)
            if(storage.userList){
                if(props?.children?.props?.children?.props?.children){ 
                    if(props.children.props.children.props.children[1]?.type?.type?.name == "ChannelUnreadBadge"){
                    //if(findInReactTree(props, m => m?.type?.type?.name == "ChannelUnreadBadge")){
                        //window.prv1 = args
                        const targetCard = props.children.props.children
                        const userDataElement = findInReactTree(targetCard, m => m?.user)
                        if(userDataElement?.user){
                            //console.log("UDE",userDataElement)
                            if(!findInReactTree(props, m => m?.key == "TabsV2-DM-List")){
                                //const userHeader = findInReactTree(props, m => (m?.props?.children == username && m?.props?.variant == "text-md/semibold"))
                                const userHeader = findInReactTree(props, m => (m?.props?.variant == "text-md/semibold" || m?.props?.variant == "redesign/channel-title/semibold"))
                                if(userHeader){
                                    userHeader.props.children = [
                                        userHeader.props.children, 
                                        <View 
                                            key="TabsV2-DM-List"
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignContent: 'flex-start'
                                        }}>
                                            <PresenceUpdatedContainer>
                                                {debugLabels ? <Text>T2-DL-1</Text> : <StatusIcons userId={userDataElement.user.id}/>}
                                            </PresenceUpdatedContainer>
                                        </View>
                                    ]
                                }
                            }
                        }
                    }
                }
            }
            
            

            //DM list on tabs v2
            //kinda broken ik
            if(props.accessibilityRole == "button"){
                if(!storage.userList) return;

                //diggy diggy hole
                if(props?.children?.props?.children?.props?.children){
                    //console.log("diggy", props?.children?.props?.children?.props?.children[0]?.type?.type?.name)
                    //if(props?.children?.props?.children?.props?.children[0]?.type?.type?.name == "GuildContainerIndicator" || props?.children?.props?.children?.props?.children[0]?.type?.type?.name == "ChannelUnreadBadge"){
                    if(props?.children?.props?.children?.props?.children[0]?.type?.type?.name == "GuildContainerIndicator"){
                        
                        //if(!findInReactTree(props.children, m => m?.source?.uri?.contains?.("/avatars"))) return;
                        //if(!findInReactTree(props.children, m => m?.props?.source?.uri)) return;
                        //window.row2 = props.children
                        //console.log("BTN: ",props)
                        
                        
                        //> > row2.props.children.props.children[1].props.children[0].props.children.props.userrow2.props.children.props.children[1].props.children[0].props.children.props.user

                        const userId = props?.children?.props?.children?.props?.children[1]?.props?.children[0]?.props?.children?.props?.user?.id

                        if(props?.children?.props?.children?.props?.children[1]?.props?.children[0]?.props?.children?.props?.guildId) return;
                        if(userId){
                            //props.children.props.children.props.children[2].props.children[0] = <Text>AAABBBB</Text>
                            const nameArea = props?.children?.props?.children?.props?.children[2]?.props?.children[0]
                            //console.log(nameArea)
                            if(nameArea){
                                //nameArea.props.children[0].props.children.push(<Text>AAABBBB{userId}</Text>)
                                const userName = nameArea.props.children[0].props.children //.push(<Text>AAABBBB</Text>)
                                //props?.children?.props?.children?.props?.children[1]?.props?.children[1]?.props?.itemKey
                                if(!findInReactTree(userName, (c) => c.key == "DMTabsV2DMList-v2")){
                                    userName.push(
                                        <PresenceUpdatedContainer key="DMTabsV2DMList-v2">
                                            {debugLabels ? <Text>DTV2DL-v2</Text> : <StatusIcons userId={userId}/>}
                                        </PresenceUpdatedContainer>
                                    )
                                }
                            }
                        }
                    }
                }
                
            }
            
        }));*/
        

        const PresenceStore = findByStoreName("PresenceStore");

        //tabs v2 dm header
        patchAfterIfFound("default", findByName("ChannelHeader", false), (args, res) => {

            if(!storage.dmTopBar) return;
            //window.ch = res
            if(!(res.type?.type?.name == "PrivateChannelHeader")) return;

            patcher.after("type",res.type,(args,res) => {
                if(!res.props?.children?.props?.children) return;
                const userId = findInReactTree(res,m => m.props?.user?.id)?.props?.user?.id
                if(!userId) return;
                
                const dmTopBar = res.props?.children
                if(!findInReactTree(res,m => m.key == "DMTabsV2Header")){
                    
                    //console.log("DTB",dmTopBar)
                    if(dmTopBar.props?.children?.props?.children[1]){
                        if(typeof dmTopBar.props?.children?.props?.children[1]?.type == "function"){

                            //alert(typeof dmTopBar.props?.children?.props?.children[1]?.type)
                            const titleThing = dmTopBar.props?.children?.props?.children[1]    

                            
                            const unpatchTV2HdrV2 = patcher.after("type",titleThing, (args,res)=>{
                                //console.log("TITLE",res)
                                unpatchTV2HdrV2()
                                if(!findInReactTree(res, (c) => c.key == "DMTabsV2Header-v2")){
                                    res.props.children[0].props.children.push(
                                        <PresenceUpdatedContainer key="DMTabsV2Header-v2">
                                            {debugLabels ? <Text>DTV2H-v2</Text> : <StatusIcons userId={userId}/>}
                                        </PresenceUpdatedContainer>
                                    )
                                }
                            })
                            


                        } else {

                            //note to self: don't hardcode asset ids
                            const arrowId = getAssetIDByName("arrow-right");
                            const container1 = findInReactTree(dmTopBar, m => m.props?.children[1]?.props?.source == arrowId)

                            container1?.props?.children?.push(<View 
                                key="DMTabsV2Header"    
                                style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'flex-start'
                            }}>
                                <View 
                                    key="DMTabsV2HeaderIcons"
                                    style={{
                                        flexDirection: 'row'
                                    }}></View>
                            </View>)
                        }
                    }

                }
                const topIcons = findInReactTree(res,m => m.key == "DMTabsV2HeaderIcons")
                if(topIcons){
                    topIcons.props.children = <StatusIcons userId={userId}/>
                }
                

            })
        });

        //icons on profile
        //might explode in a future update
        //it in fact exploded lmao, saving for later
        //const DefaultName = findByName("DefaultName", false);
        //unpatches.push(patcher.after("default", DefaultName, (args, res) => {
        //    window.dnn1 = args
        //    const user = args[0]?.user;
        //    if (user === undefined) return;
        //    if(!res) return;
        //    if(!user.id) return;
        //    if(!storage.profileUsername)return;
        //    res.props?.children[0]?.props?.children?.push(<StatusIcons userId={user.id}/>)
        //}));


        const profileBadgeProps = {};
        const applyProfileBadgeProps = (_, element) => {
            const badge = profileBadgeProps[element?.props?.id];
            if (badge && element?.props) {
                element.props.source = badge.source;
                element.props.label = badge.label;
                element.props.id = badge.id;
            }
        };
        const applyRenderBadgeProps = (_, element) => {
            const badge = profileBadgeProps[element?.props?.id];
            if (badge && element?.props) Object.assign(element.props, badge);
        };
        const jsxApi = (globalThis as any).bunny?.api?.react?.jsx;

        if (jsxApi?.onJsxCreate) {
            jsxApi.onJsxCreate("ProfileBadge", applyProfileBadgeProps);
            jsxApi.onJsxCreate("RenderBadge", applyRenderBadgeProps);
            unpatches.push(() => {
                jsxApi.deleteJsxCreate?.("ProfileBadge", applyProfileBadgeProps);
                jsxApi.deleteJsxCreate?.("RenderBadge", applyRenderBadgeProps);
            });
        } else {
            const jsxRuntime = findByProps("jsx", "jsxs");
            const applyBadgeJsx = ([component], element) => {
                if (component?.name === "ProfileBadge") applyProfileBadgeProps(component, element);
                if (component?.name === "RenderBadge") applyRenderBadgeProps(component, element);
            };
            patchAfterIfFound("jsx", jsxRuntime, applyBadgeJsx);
            patchAfterIfFound("jsxs", jsxRuntime, applyBadgeJsx);
        }

        const useBadges = findByName("useBadges", false);
        patchAfterIfFound("default", useBadges, (args, badges) => {
            const userId = args[0]?.userId;
            if (!storage.profileUsername || !userId || !Array.isArray(badges)) return;

            const cachedStatuses = getUserStatuses(userId);
            const statuses = cachedStatuses && Object.keys(cachedStatuses).length
                ? cachedStatuses
                : PresenceStore.getClientStatus?.(userId) ?? cachedStatuses;
            const platformStatuses = Object.entries(statuses ?? {})
                .filter(([platform]) => platformOrder.includes(platform))
                .sort(([left], [right]) => platformOrder.indexOf(left) - platformOrder.indexOf(right));

            for (const [platform, status] of platformStatuses.reverse()) {
                const iconUri = platformBadgeSources[platform]?.[status];
                if (!iconUri) continue;

                const id = `platform-indicator-${userId}-${platform}`;
                const label = `${platform.charAt(0).toUpperCase()}${platform.slice(1)} (${status})`;
                profileBadgeProps[id] = {
                    id,
                    source: { uri: iconUri },
                    label,
                    userId
                };
                badges.unshift({ id, description: label, icon: "platform-indicator" });
            }
        });

        const Status = findByName("Status", false);
        patchBeforeIfFound("default", Status, (args) => {
            if(!args) return;
            if(!args[0]) return;
            if(!storage.hideMobileStatus)return;
            args[0].isMobileOnline = false
        })

        //might remove in the future, seems outdated
        //next 2 patches taken from here: https://github.com/Fierdetta/staff-tags/
        const Rows = findByProps("GuildMemberRow")
        if(Rows?.GuildMemberRow){
            unpatches.push(patcher.after("type", Rows.GuildMemberRow, ([{ user }], res) => {
                if(!storage.userList) return;
                if(!user || user.bot) return;
                if(storage.oldUserListIcons) return;
                insertStatusIconsAfterName(res, user.id, "GuildMemberRowStatusIconsView");
            }))
        }


        //https://github.com/everestmcarthur/revenge-plugins/blob/main/plugins/staff-tags/src/patches/details.tsx
        let patchedAvatar = false
        // user list on tabs v2
        const rowPatch = ([{ user }], res) => {
            if(!storage.userList) return;
            if(!user || user.bot) return;

            const label = res?.props?.label;
            const modifiedStatusIcons = findInReactTree(label, (c) => c.key == "TabsV2MemberListStatusIconsView");

            if(!modifiedStatusIcons){
                if (storage.oldUserListIcons) {
                    res.props.label = (
                        <View style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center"
                        }} key="TabsV2MemberListStatusIconsView">
                            {label}
                            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 2 }}>
                                {debugLabels ? <Text>TV2MLSIV</Text> : <StatusIcons userId={user.id} small />}
                            </View>
                        </View>
                    );
                } else insertStatusIconsAfterName(label, user.id, "TabsV2MemberListStatusIconsView");

                if(!patchedAvatar && res?.props?.icon?.type){
                    unpatches.push(patcher.before("type", res.props.icon.type, (args)=>{
                        if(storage.hideMobileStatus){
                            args[0].isMobileOnline = false
                        }
                    }))
                    patchedAvatar = true
                }
            }

            
        }

        findByTypeNameAll("UserRow").forEach((UserRow) => unpatches.push(patcher.after("type", UserRow, rowPatch)))






        /*const MessagesItemChannelLegend = findByProps("MessagesItemChannelLegend").MessagesItemChannelLegend;
        unpatches.push(patcher.after("type", MessagesItemChannelLegend, (args, res) => {
        }))*/


        //Newest dm list patch (it's shit)
        //Requires forcing a re-render of the whole list manually
        const MessagesItemChannelContent = findByTypeName("MessagesItemChannelContent")
        patchAfterIfFound("type", MessagesItemChannelContent, (args, res) => {
            console.log("MessagesItemChannelContent-B", args, res)
            //window.micc = res
            const channel = args[0]?.channel
            if(channel?.recipients?.length == 1){
                const userId = channel.recipients[0]
                
                
                //took some inspiration from here
                //https://github.com/everestmcarthur/revenge-plugins/blob/main/plugins/staff-tags/src/patches/details.tsx
                
            
                if(findInReactTree(res, m => m?.key == "TabsV2RedesignDMListIcons2")) return;

                const nameContainer = findInReactTree(res, m => m?.props?.children?.some(h => h?.props?.ellipsizeMode))
                window.nc = nameContainer
                
                if(nameContainer?.props?.children){
                    const orig = nameContainer.props.children[0]
                    nameContainer.props.children = <View key="TabsV2RedesignDMListIcons2" style={{
                        flexDirection: 'row'
                    }}>
                        {orig}
                        <StatusIcons userId={userId}/>
                    </View>
                }
            }
            //nameContainer.props.children = <Text>hhh</Text>
            //const userId = messageContainer?.props?.message?.author?.id
            //const userId = messageContainer?.props?.channel?.ownerId
            
        });




    },
    onUnload: () => {
        unpatches.forEach(u => u());

    },

    settings:()=>{
        return <Settings/>
    }

}

