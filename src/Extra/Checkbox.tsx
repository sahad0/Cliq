import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

type Checkbox = {
    isChecked:boolean,
    onPress:() => void,

}


const CheckBox:FC<Checkbox> = ({isChecked,onPress}):JSX.Element => {
	const iconName = isChecked ?
		"checkbox-marked" : "checkbox-blank-outline";

	return (
		<View style={styles.container}>
			<Pressable onPress={onPress}>
				<MaterialCommunityIcons
					name={iconName} size={24} color="#000" />
			</Pressable>
		</View>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: 150,
		marginTop: 5,
		marginHorizontal: 5,
	},
	
});
