import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";

const HireJobScreen = ({ route, navigation }) => {
  //   const {step, title} = route.params;
  const DATA = [
    {
      id: "1",
      Agency: "KMITL",
      position:"Frontend Dev",
    },
    {
      id: "2",
      Agency: "KMITL",
      position:"Frontend Dev",
      
    },
    {
      id: "3",
      Agency: "KMITL",
      position:"Frontend Dev",
    },

  ];
  const Item = ({ Agency }) => (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("HireJobDetailScreen")
    }}
  >
    <View style={{ ...styles.item, ...{ backgroundColor: "white" } }}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>

      <ImageBackground
        source={require("../../assets/PostPlaceholder.png")}
        style={styles.bgImage}
      ></ImageBackground>

      </View>
      {/* ชื่อหน่วยงาน */}
      <Text style={styles.title} numberOfLines={2}>
        KMITL
      </Text>
      {/* ตำแหน่ง */}
      <Text style={styles.subText}>
        Frontend Dev
      </Text>
      {/* ค่าจ้าง */}
      <Text style={styles.subText} >สามารถต่อรองเงินเดือนได้</Text>
      {/* เงื่อนไข */}

      <Text style={styles.detailText}>-มีประสบการณ์5ปีขึ้นไป</Text>
      <Text style={styles.detailText}>-มีประสบการณ์5ปีขึ้นไป</Text>
      <Text style={styles.detailText}>-มีประสบการณ์5ปีขึ้นไป</Text>
      <Text style={styles.detailText}>-มีประสบการณ์5ปีขึ้นไป</Text>
      <Text style={{...styles.detailText,...{alignSelf:"flex-start",marginTop:15}}}>29 ก.พ.64</Text>
    </View>
  </TouchableOpacity>
  );
  return (
    <View styles={styles.container}>
              <Button
      title="create"
      onPress={() => {
        navigation.navigate("CreateHire", {
        });
      }}
    />
             <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
            />
     
    </View>
    //     <SafeAreaView style={styles.container}>
    //     <FlatList
    //       data={DATA}
    //       renderItem={({item}) => <Item title={item.title} />}
    //       keyExtractor={item => item.id}
    //     />
    //   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    width:"95%",
    height:335,
    marginVertical:"2%",
    borderRadius:10,
    alignSelf:"center",
    // padding: 20
  },
  title: {
    marginLeft:15,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    color: "#4B32E5",
  },
  subText:{
    fontSize:13,
    marginLeft:20,
  },
  detailText:{
    fontSize:11,
    color:"#929090",
    marginLeft:10,
    
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    resizeMode: "stretch",

  },
  mealRow: {
    flexDirection: "row",
    backgroundColor:"gray",
  },
  mealHeader: {
    height: "50%",
  },
});

export default HireJobScreen;