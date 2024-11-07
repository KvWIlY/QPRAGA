import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#dbead5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
  pickerContainer: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#c1d8b4',
    borderRadius: 8,
    padding: 1,
  },
  pickerLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    borderColor: '#c1d8b4',
    borderWidth: 1,
    borderRadius: 8,
  },
  textInput: {
    height: 50,
    borderColor: '#c1d8b4',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  photoButton: {
    flex: 1,
    backgroundColor: '#469536',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  photoButtonText: {
    color: '#dbead5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  okButton: {
    flex: 1,
    backgroundColor: '#469536',
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  okButtonText: {
    color: '#dbead5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  cameraCloseButton: {
    backgroundColor: '#469536',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cameraCloseButtonText: {
    color: '#dbead5',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    position: 'absolute',
    bottom: 16,
    width: '100%',
    textAlign: 'center',
  },
  cameraCaptureButton: {
    backgroundColor: '#469536',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cameraCaptureButtonText: {
    color: '#dbead5',
    fontWeight: 'bold',
  },
  photoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  previewImage: { 
    width: 200,
    height: 200,
    borderRadius: 8,
    marginTop: 20,
    borderColor: '#c1d8b4',
    borderWidth: 2,
  },
});
