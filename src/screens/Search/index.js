import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

import { Platform, RefreshControl } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../Api';

import {useNavigation} from '@react-navigation/native';
import {
    Container,
    Scrooler,
    
    HeaderArea, 
    HeaderTitle, 
    SearchButton, 

    LocationArea,
    LocationInput, 
    LocationFinder,

    LoadingIcon,
    ListArea,

} from './styles';

import PetCarerItem from '../../components/PetCarerItem';


import SearchIcon from '../../assets/search.svg';
import MylocationIcon from '../../assets/my_location.svg';

export default () => {
    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
        if(result == 'granted'){

            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getPetCare();
            });
        }
    }

    const getPetCare = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(coords){
            lat = coords.latitude;
            lng = coords.longitude;
        }
        let res = await Api.getPetCare(lat, lng, locationText);
        if(res.error == ''){
            if(res.loc){
                setLocationText(res.loc);
            }

            setList(res.data);

        }else{
            alert("Erro: "+res.error);
        
        }
        
        setLoading(false);
    }

    useEffect(()=>{
        getPetCare();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getPetCare();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getPetCare();
    }

    return(
        <Container>
            <Scrooler refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                

                <LocationArea>
                    <LocationInput 
                    placeholder='Digite o nome do seu PetCare!'
                    placeholderTextColor="#ffffffff"
                    /*value={locationText}
                    onChangeText={t=>setLocationText(t)}
                    onEndEditing={handleLocationSearch}*/
                    />
                     <LocationFinder onPress={handleLocationFinder}>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon widh="26" height="26" fill="#ffffffff"/>
                    </SearchButton>
                    </LocationFinder>
                </LocationArea>
                    {loading &&
                    <LoadingIcon size="large" color="#FFFF"/>
                
                    }

                    <ListArea>
                        {list.map((item, k)=>(
                            <PetCarerItem key={k} data={item} />
                        ))}
                    </ListArea>

            </Scrooler>
        </Container>
    );
}