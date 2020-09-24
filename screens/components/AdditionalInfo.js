import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet } from 'react-native';

class AdditionalInfo extends React.Component {
  state = {
    iconName: this.props.iconName,
    info: this.props.info,
    units: this.props.units,
    marginLeft: this.props.marginLeft
  };

  render() {
    const {iconName, info, units, marginLeft} = this.state;

    return(
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: marginLeft}}>
        <MaterialCommunityIcons name={iconName} color='#ffffff' size={25}/>
        <Text style={styles.additionalText}>{parseInt(info)} {units}</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  additionalText: {
    paddingLeft: 5,
    lineHeight: 50,
    color: '#ffffff',
  }
});

export default AdditionalInfo;