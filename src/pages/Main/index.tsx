import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { IonApp, IonContent, IonHeader } from "@ionic/react";
import Title from "../../components/Header";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    marginTop: "10px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };

  render() {
    const { products } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <Title name="Home" />
        </IonHeader>
        <IonContent>
          <div className="product-list">
            {products.map((product: any) => (
              <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>

                <Link to={`/product/${product._id}`}>
                  <StyledButton variant="contained" color="primary">
                    View
                  </StyledButton>
                </Link>
              </article>
            ))}
          </div>
        </IonContent>
      </IonApp>
    );
  }
}
