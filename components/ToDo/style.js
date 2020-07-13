import { StyleSheet } from 'react-native';

const ToDoStyles = StyleSheet.create({
  container: {
    height: '78%',
    backgroundColor: '#fff',
  },
  todocontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    paddingLeft: 20,
    backgroundColor: '#FFF',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    flexDirection: 'row',
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});

export default ToDoStyles;
