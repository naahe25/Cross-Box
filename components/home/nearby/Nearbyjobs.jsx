import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router'


import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobsCard  from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  const{ data,isLoading,error } = useFetch('search',{
    query: 'React Developer',
    num_pages:1
  });

  //console.log(data);

  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerTitle}>Nearby Job</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading? (
          <ActivityIndicator size="large" colors= {COLORS.primary}/>
        ) : error? (
          <Text>Something Went Wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobsCard 
            
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs