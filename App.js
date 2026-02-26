import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View
      style={{
        paddingTop: 50,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="course gooal"
          style={{
            borderWidth: 1,
            borderColor: "#cccccc", 
            width: "80%",
          }}
        />
        <Button title="Add Goal" />
      </View>

      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
