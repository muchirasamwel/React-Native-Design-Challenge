import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  banner: {
    height: 250
  },
  profile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.4)'
  },
  profile_img: {
    width: 70,
    height: 70
  },
  profile_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  profile_description: {
    textAlign: 'center',
    fontSize: 13,
    color: 'white',
    maxWidth: '50%',
    marginTop: 10
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    padding: 15,
    flexDirection: 'row'
  },
  info_icon: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  info_container: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: -30
  },
  info_container_2: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 15
  }
})
