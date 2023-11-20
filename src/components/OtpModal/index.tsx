import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { generateTotp } from 'src/utils/totp'

export function OtpCamera() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => setHasPermission(status === 'granted'))
  }, [])

  const handleBarCodeScanned = async ({ data }: any) => {
    setScanned(true)
    const { totp, issuer } = generateTotp(data)

    alert(`TOTP: ${totp} \n ISSUER: ${issuer}`)
  }

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Camera permission not granted</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.camera} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 40
  },
  camera: {
    flex: 1
  }
})
