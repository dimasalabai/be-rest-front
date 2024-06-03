import styles from './popular.module.css';

import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectAllCountries } from '../../../redux/countries/country-selectors';

import {
  addFavorite,
  deleteFavorite,
} from '../../../redux/favorites/favorites-operations';

import { fetchCountries } from '../../../redux/countries/country-operations';

import icon from '../../../img/icons.svg';

const Popular = () => {
  const { items, isLoading, error } = useSelector(selectAllCountries);
  const { favoriteItems } = useSelector(store => store.favoriteCountries);

  const [likedItems, setLikedItems] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // Load liked items from localStorage on component mount
  useEffect(() => {
    const storedLikedItems =
      JSON.parse(localStorage.getItem('likedItems')) || {};
    setLikedItems(storedLikedItems);

    // Dispatch actions to update global state with the stored liked items

    for (const id in storedLikedItems) {
      console.log(id, favoriteItems);
      if (!favoriteItems.includes(id)) {
        // Перевірка чи елемент є в глобальному стані
        if (storedLikedItems[id]) {
          dispatch(addFavorite(id));
        } else {
          dispatch(deleteFavorite(id));
        }
      }
    }
  }, [dispatch, favoriteItems]);

  // Update localStorage whenever likedItems changes
  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  // Sync favoriteItems with likedItems when favoriteItems changes
  useEffect(() => {
    setLikedItems(prevLikedItems => {
      const updatedLikedItems = { ...prevLikedItems }; // Копіюємо попередній стан
      favoriteItems.forEach(id => {
        // Додаємо тільки, якщо елемент ще не існує у стані likedItems
        if (!updatedLikedItems[id]) {
          updatedLikedItems[id] = true;
        }
      });
      return updatedLikedItems; // Повертаємо оновлений стан
    });
  }, [favoriteItems]);

  if (isLoading) {
    return (
      <section className={styles.popular}>
        <div className="container">
          <h2 className={styles.mainTitle}>Find Popular Destination</h2>
          <div className={styles.coutriesContainer}>
            <p>...Loading</p>
          </div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className={styles.popular}>
        <div className="container">
          <h2 className={styles.mainTitle}>Find Popular Destination</h2>
          <div className={styles.coutriesContainer}>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!items || !items.countries) {
    return null; // Add this to prevent errors if items is undefined or has no countries
  }

  const changeLike = ({ target }) => {
    const { id, checked } = target;
    setLikedItems(prevLikedItems => {
      const updatedLikedItems = { ...prevLikedItems, [id]: checked };

      if (!checked) {
        delete updatedLikedItems[id]; // Remove the item from the likedItems state
      }

      // Update localStorage after state update
      localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));

      return updatedLikedItems;
    });

    if (checked) {
      dispatch(addFavorite(id));
    } else {
      dispatch(deleteFavorite(id));
    }
  };

  const countryItems = items.countries.map(({ _id, image, country, city }) => {
    const isLiked = likedItems[_id] || false;
    return (
      <li key={_id} className={styles.countryItem}>
        <div className={styles.countryImage}>
          <img src={image} alt="" />
        </div>
        <div className={styles.bottomInfo}>
          <div className={styles.countryLocation}>
            <svg className={styles.countryLocationIcon} width="24" height="24">
              <use href={`${icon}#icon-location`} />
            </svg>
            <p className={styles.countryName}>
              {country}, {city}
            </p>
          </div>
          <form>
            <label htmlFor={_id} className={styles.wrapLike}>
              <input
                id={_id}
                type="checkbox"
                name="like"
                value="like"
                className={styles.likeInput}
                checked={isLiked}
                onChange={changeLike}
              />
              <svg
                className={`${styles.likeIcon} ${isLiked ? styles.liked : ''}`}
                width="32"
                height="32"
              >
                <use href={`${icon}#icon-like`} />
              </svg>
            </label>
          </form>
        </div>
      </li>
    );
  });

  return (
    <section className={styles.popular}>
      <div className="container">
        <h2 className={styles.mainTitle}>Find Popular Destination</h2>
        <div className={styles.coutriesContainer}>
          <ul className={styles.coutriesList}>{countryItems}</ul>
        </div>
        <h2 className={styles.mainTitle}>My Favorite Destinations</h2>
        <div className={styles.coutriesContainer}>
          {/* <ul className={styles.coutriesList}>{countryItems}</ul> */}
        </div>
      </div>
    </section>
  );
};

export default Popular;
