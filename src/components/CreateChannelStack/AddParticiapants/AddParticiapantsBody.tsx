import { FlatList, ListRenderItem, Text, View, Image, TouchableOpacity, Pressable, ActivityIndicator, } from 'react-native'
import React, { Dispatch, FC, PureComponent, SetStateAction, useEffect, useRef, useState ,LegacyRef, Component, memo} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AddParticipantsExt from './AddParticipantsExt';
import { Selected, SelectedState } from '../../../pages/CreateChannelStack/AddParticipants';
import { Istate } from '../../../utils/LoaderHandling';

export type ItemProps = {
        id:string,
        email:string,
        profile: {
            first_name: string,
            last_name:string,
            mini_avatar_url:string,
        }
}

interface RenderType {
    item:ItemProps,
    height:number,
    width:number,
    addId:(id:string,name:string)=>void,
    selected:Selected[],
}

interface AppProps  {
    height: number,
    width: number,
    data: ItemProps[];
    selected:Selected[],
    setSelected:Dispatch<SetStateAction<SelectedState>>,
    eventReducer:{
        loading?: boolean,
    }|undefined
   
}





const RenderItem:FC<RenderType> = memo(({item,height,width,addId,selected}):JSX.Element=>{

    let bouncyCheckboxRef:BouncyCheckbox|null =null;
    

    return(
    <>
        <Pressable onPress={()=> bouncyCheckboxRef?.onPress()} style={{borderColor:'gray', height:height*0.085,alignSelf:'center',width:width,backgroundColor:'white',borderRadius:height*0.012,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:height*0.007,}}>
            <View style={{borderRadius:height*0.03,padding:height*0.00,flexDirection:'row',backgroundColor:'white',alignItems:'center'}}>
                <View style={{marginLeft:height*0.021250}}>
                    <Image source={require('../../../assets/images/profile.png')} style={{height:height*0.060,width:height*0.060,}} />
                </View> 
                <View style={{marginLeft:width*0.03}}>
                    <Text style={{color:'black',fontSize:height*0.018}} >{item.profile.first_name}</Text>
                    <Text style={{color:'gray',fontSize:height*0.015}}>{item.email}</Text>
                </View>

            </View>
            <View style={{marginRight:width*0.03}}>
              
             {selected?.some(items =>  items.id===item.id) ?
             <>
                 <BouncyCheckbox disableBuiltInState isChecked={true} ref={(ref):any=>bouncyCheckboxRef=ref}  fillColor='#5f5aad' size={height*0.025} useNativeDriver={true} onPress={()=>{addId(item.id,item.profile.first_name)}} />

             </> :
             <>

                 <BouncyCheckbox disableBuiltInState  isChecked={false} ref={(ref):any=>bouncyCheckboxRef=ref} fillColor='#5f5aad'  size={height*0.025} useNativeDriver={true} onPress={()=>{addId(item.id,item.profile.first_name)}} />
             

             </> }  
                     
                

            </View>

        </Pressable>
    </>
)})



export default class AddParticiapantsBody extends PureComponent<AppProps> {

    

    addId = (id:string,name:string)=>{

        
        let updated = [...this.props.selected].filter((k)=>{
            return k.id !==id;
        });

        if(updated.length===this.props.selected.length){
            updated = [{id:id,name:name},...updated]
        }

        
        this.props.setSelected(updated);


    }

    removeId = (id:string)=>{
        
        let updated = [...this.props.selected].filter((k)=>{
            return k.id !==id;
        });

        this.props.setSelected(updated);
    }

    

    keyExtractor = (item:ItemProps):string => item.id;

    renderItem:ListRenderItem<ItemProps> = ({item})=> <RenderItem selected={this.props.selected} height={this.props.height} width={this.props.width}  addId={this.addId} item={item}/>

    Layout = (data:ItemProps[]| null | undefined, index:number):{length:number,offset:number,index:number} => (
        {length: this.props.height*0.085, offset: (this.props.height*0.085 * index), index}
      )

    render() {

    return (
        <>
            <FlatList  legacyImplementation={false} getItemLayout={this.Layout}   showsVerticalScrollIndicator={false} style={{flex:1}} initialNumToRender={14} data={this.props.data} keyExtractor={this.keyExtractor}  renderItem={this.renderItem}   />
            {this.props.eventReducer?.loading ??
                 <View style={{position:'absolute',alignItems:'center',justifyContent:'center',flex:1,}}>
                    <ActivityIndicator color={'red'} size={this.props.height*0.05}  style={{left:this.props.width*0.45,height:this.props.height}} />
    
                </View>
            }

            <Text style={{color:'red'}}>{typeof(this.props.eventReducer)}</Text>
           
            {
                this.props.selected.length!==0 
                &&
                (  
                    <>
                        <AddParticipantsExt height={this.props.height} width={this.props.width} selected={this.props.selected} removeId={this.removeId} />
                    </>
                )
            }
        </>
    )
  }
}