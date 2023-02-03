import React, { PureComponent } from 'react'
import { FlatList, ListRenderItem, Text, View } from 'react-native'

type OrganisationType = {
    id?: string,
    name?: string,
    isDefault?:boolean,
    owner?:object
}

type Props = {
    height: number,
    width: number,
    orgState:OrganisationType[],
}

  
  export default class OrgFlatlist extends PureComponent<Props> {
    keyExtractor = (item:{id?:string}, index:number) => item.id;
    renderItem:ListRenderItem<OrganisationType> = ({ item }) => (
        <>
            <Text>{item.id}</Text>
        </>
    );
  
    render() {
      return (
        <FlatList
          keyExtractor={this.keyExtractor.toString()}
          renderItem={this.renderItem}
          data={this.props.orgState}
        />
      );
    }
  }


 


