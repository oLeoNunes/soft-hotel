import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CardList from "../../components/CardList";
import { requestListRestaurants } from "../../services/api";
import { IListRestaurant } from "../../services/interfaces";

interface IRestaurantContextData {
  restaurantlist: IListRestaurant[];
  restaurantFilter: IListRestaurant[];
  showCardList(iptvalue: string): void;
  InputValue: any;
  setInputValue: any;
  validation: boolean;
}

export const RestaurantContex = createContext<IRestaurantContextData>(
  {} as IRestaurantContextData
);

const RestaurantProvider = () => {
  const [restaurantlist, setRestaurantlist] = useState<IListRestaurant[]>([]);
  const [restaurantFilter, setRestaurantFilter] = useState<IListRestaurant[]>([
    ...restaurantlist,
  ]);
  const [InputValue, setInputValue] = useState<string>("");
  const [validation, setValidation] = useState(false);

  async function getRestaurantsList() {
    const newRestaurantList = await requestListRestaurants();
    setRestaurantlist(newRestaurantList);
  }

  function primeiroRender() {
    restaurantlist.map((restaurant) => {
      return <CardList key={restaurant.id} restaurant={restaurant} />;
    });
  }

  useEffect(() => {
    getRestaurantsList();
  }, []);

  useEffect(() => {
    setRestaurantFilter([...restaurantlist]);
  }, [restaurantlist]);

  function showCardList(iptvalue: string) {
    setRestaurantFilter(
      restaurantlist.filter((res) => {
        return (
          res.category.toLowerCase().includes(iptvalue.toLowerCase()) ||
          res.name.toLowerCase().includes(iptvalue.toLowerCase()) ||
          res.district.toLowerCase().includes(iptvalue.toLowerCase())
        );
      })
    );
  }

  useEffect(() => {
    if (InputValue === "") {
      setValidation(false);
      setRestaurantFilter(restaurantlist);
    } else if (InputValue !== "") setValidation(true);
  }, [InputValue]);

  return (
    <RestaurantContex.Provider
      value={{
        restaurantlist,
        showCardList,
        restaurantFilter,
        InputValue,
        setInputValue,
        validation,
      }}
    >
      <Outlet />
    </RestaurantContex.Provider>
  );
};

export default RestaurantProvider;
