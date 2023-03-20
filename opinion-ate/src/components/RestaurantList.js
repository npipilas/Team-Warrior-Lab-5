import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export function RestaurantList({loadRestaurants, restaurants}) {
    useEffect(() => {
    loadRestaurants();
    }, [loadRestaurants]);
    return <div>RestaurantList</div>;
    }

   
 const mapStateToProps = state => ({
        restaurants: state.restaurants.records,
        });


        const mapDispatchToProps = {loadRestaurants};
        export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

        