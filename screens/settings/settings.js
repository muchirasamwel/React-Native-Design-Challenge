import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { styles } from './styles'
import { List } from 'react-native-paper'
export default function Settings () {
  const [expanded, setExpanded] = React.useState(true)

  const handlePress = () => setExpanded(!expanded)
  return (
    <View>
      <View style={styles.banner}>
        <ImageBackground
          source={require('../../assets/images/bg.webp')}
          style={styles.image}
        >
          <View style={styles.profile}>
            <List.Icon
              color={'white'}
              icon='heart-outline'
              style={{ position: 'absolute', top: 20, right: 55 }}
            />
            <List.Icon
              color={'white'}
              icon='basket'
              style={{ position: 'absolute', top: 20, right: 15 }}
            />
            <Image
              source={require('../../assets/images/avatar.webp')}
              style={styles.profile_img}
            />
            <Text style={styles.profile_name}>Miranda West</Text>
            <Text style={styles.profile_description}>
              Work hard in silence and let success make the noise
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.info_container}>
          <List.Accordion
            title='Address'
            left={props => <List.Icon {...props} icon='map-marker' />}
          >
            <List.Item title='Address 1' />
            <List.Item title='Address 2' />
          </List.Accordion>
          <View style={styles.lineStyle} />
          <List.Accordion
            title='Account'
            left={props => <List.Icon {...props} icon='account-multiple' />}
          >
            <List.Item title='Address 1' />
            <List.Item title='Address 2' />
          </List.Accordion>
        </View>

        <View style={styles.info_container_2}>
          {/* <View style={styles.info}>
            <Image
              source={require('../../assets/images/avatar.webp')}
              style={styles.info_icon}
            />
            <Text style={styles.info_text}>My Address</Text>
          </View>
          */}
          <List.Accordion
            title='Notifications'
            left={props => <List.Icon {...props} icon='bell' />}
          >
            <List.Item title='Address 1' />
            <List.Item title='Address 2' />
          </List.Accordion>

          <View style={styles.lineStyle} />
          <List.Accordion
            title='Devices'
            left={props => <List.Icon {...props} icon='tablet-android' />}
          >
            <List.Item title='Address 1' />
            <List.Item title='Address 2' />
          </List.Accordion>
          <View style={styles.lineStyle} />
          <List.Accordion
            title='Passwords'
            left={props => <List.Icon {...props} icon='key' />}
          >
            <List.Item title='Address 1' />
            <List.Item title='Address 2' />
          </List.Accordion>
          <View style={styles.lineStyle} />
          <List.Accordion
            title='Language'
            left={props => <List.Icon {...props} icon='message' />}
          >
            <List.Item title='Address 1' />
            <List.Item title='Address 2' />
          </List.Accordion>
        </View>
      </View>
    </View>
  )
}
