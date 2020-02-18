import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonList,
  IonSkeletonText
} from "@ionic/react";
import Title from "../../components/Header";

const StyledButton = withStyles({
  root: {
    background:
      "linear-gradient(to right, rgba(62,146,204,1) 0%, rgba(42,98,143,1) 0%, rgba(42,98,143,1) 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    marginTop: "10px",
    padding: "0 30px",
    boxShadow: "0 2px 2px rgba(19,41,61,1)",
    "&$disabled": {
      color: "white"
    }
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export function LoadingItem() {
  return (
    <>
      <article>
        <h1>
          <IonSkeletonText animated style={{ width: "20%" }}></IonSkeletonText>
        </h1>
        <p>
          <IonSkeletonText animated style={{ width: "50%" }}></IonSkeletonText>
        </p>
        <StyledButton variant="contained" color="primary" disabled>
          <IonSkeletonText animated style={{ width: "20%" }}></IonSkeletonText>
        </StyledButton>
      </article>
    </>
  );
}

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
    loading: true
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ loading: false, products: docs, productInfo, page });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <Title name="Home" />
        </IonHeader>
        <IonContent>
          <div className="product-list">
            {loading ? (
              <>
                <IonList>
                  <LoadingItem />
                </IonList>
              </>
            ) : (
              products.map((product: any) => (
                <article key={product._id}>
                  <strong>{product.title}</strong>
                  <p>{product.description}</p>

                  <Link to={`/product/${product._id}`}>
                    <StyledButton variant="contained" color="primary">
                      View
                    </StyledButton>
                  </Link>
                </article>
              ))
            )}
          </div>
        </IonContent>
      </IonApp>
    );
  }
}
