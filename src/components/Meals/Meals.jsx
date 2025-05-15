import { useEffect, useState } from "react";
import styles from "./Meals.module.css";

import Meal from "../Meal/Meal";
import useHttp from "../../hooks/Http/useHttp";
import ErrorInfo from "../ErrorInfo/ErrorInfo.jsx";

const urlMeals = 'https://app-portfolio-ba2d4-default-rtdb.europe-west1.firebasedatabase.app/app-food-order/food-list.json';


export default function Meals() {

  const { isFetching, data: meals, sendRequest, error } = useHttp([]);

  useEffect(() => {
    sendRequest(urlMeals);
  }, [])


  let mealsInfo = <p> Esperando la busqueda de los menus... </p>

  if (isFetching) {
    mealsInfo = <p> Buscando los menus en la base de datos... </p>
  }

  if (error) {
    mealsInfo = <ErrorInfo title={"Error fetching menus..."} message={error}/>
  }

  if (!error && !isFetching && meals.length > 0) {
    mealsInfo = meals.map(meal => <Meal key={meal.id} meal={meal} />);
  }


  return (
    <main className={styles["meals-container"]}>
      {mealsInfo}
    </main>
  )

}