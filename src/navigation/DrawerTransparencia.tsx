import { createDrawerNavigator } from "@react-navigation/drawer";
import TransparenciaScreen from '../screens/TransparenciaScreen';
import LinkTransparenciaScreen from "../screens/LinkTransparenciaScreen";
import MenuTransparencia from "../components/MenuTransparencia";
import DirectorioScreen from "../screens/DirectorioScreen";
import GelocalizacionScreen from "../screens/GelocalizacionScreen";
import MapaScreen from "../screens/MapaScreen";
import DirectorioGeneralScreen from '../screens/DirectorioGeneralScreen';
import { directorioInterface } from "../interface/directorioInterface";


export type RootDrawerTransparenciaParams = {
    Transparencia:undefined,
    LinkTransparencia:{
        link:string
    },
    DirectorioGeneral:undefined,
    Directorio:{
      telefono:string,
      dato:Array<directorioInterface>
    },
    Geolocalizacion:undefined,
    Mapa:{
      lat:number,
      lng:number
    }
  }

const Drawer = createDrawerNavigator<RootDrawerTransparenciaParams>();

const DrawerTransparencia = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuTransparencia {...props} />}
    screenOptions={{
      unmountOnBlur:true
    }}
    initialRouteName="Transparencia"
    
    >
      <Drawer.Screen name="Transparencia" component={TransparenciaScreen} />
      <Drawer.Screen name="LinkTransparencia" component={LinkTransparenciaScreen} />
      <Drawer.Screen name="DirectorioGeneral" component={DirectorioGeneralScreen} />
      <Drawer.Screen name="Directorio" component={DirectorioScreen} />
      <Drawer.Screen name="Geolocalizacion" component={GelocalizacionScreen} />
      <Drawer.Screen name="Mapa" component={MapaScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerTransparencia;