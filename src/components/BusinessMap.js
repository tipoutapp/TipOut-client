import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';


class BusinessMap extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isMapReady: false,
      region: {
        latitude:  32.084291, 
        longitude: 34.781562,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      },
      businesses: []
    }
  }

  componentDidMount(){
    axios.get('https://tipssout.herokuapp.com/user/3')
      .then(response => this.setState({businesses: response.data.res.business}));
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  getMapMarkers() { 
      return this.state.businesses.map(business => {
        return( 
        <Marker
          key={business.id}
          title={business.name}
          coordinate={{
            latitude:  business.location.coordinates[0], 
            longitude: business.location.coordinates[1],
            }}
            description={business.description}
            />);
      });
  }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }
  render() {
    var mapStyle = [];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          // initialRegion={{
          //   latitude: 37.78825,
          //   longitude: -122.4324,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
          provider='google'
          mapType='standard'
          region={this.state.region}
          customMapStyle={mapStyle}
          onLayout={this.onMapLayout}
        >
          {/* <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Mark Marker'}
            description={'this is the favorite place to go out'}
          /> */}

         
          {this.state.isMapReady && this.getMapMarkers()}
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // flex:1
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    // flex:1,
    // height: 50,
    // width: 50
  },
});

export default BusinessMap;