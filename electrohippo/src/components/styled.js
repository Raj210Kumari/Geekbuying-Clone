import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductTitle = styled.div`
  color: blue;
  font-size: 16px;
  line-height: 26px;
  margin-top: 14px;
  color: #333;
  font-weight: 700;
`;
export const ProductSpan = styled.div`
  line-height: 20px;
  color: #333;
  font-size: 14px;
  display: inline;
`;

export const ProductInfo = styled.div`
  margin: 0px 35px;
`;
export const Grid = styled.div`
  margin-right: 130px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid transparent;
  padding-top: 26px;
  padding-bottom: 20px;
`;
export const filterP = styled.button`
  background-color: black;
  margin: 8px 629px;
  color: blue;
`;
export const MobLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
