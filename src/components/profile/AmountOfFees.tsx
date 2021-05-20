import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const AmountOfFeesWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  padding: 5px 0;
  margin-bottom: 15px;
`;

const Table = styled.table`
  text-align: left;
  border-radius: 12px 12px 0 0;
  border-collapse: collapse;
`;

const Row = styled.tr`
  text-overflow: ellipsis;
`;

const TableHeader = styled.th`
  padding: 10px 12px;
  background: #ebebeb;
  font-weight: bold;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Column = styled.td`
  padding: 10px 12px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CustomInput = styled.input.attrs({
    type: "text",
})`
color: blue;
`;

export const AmountOfFees: FC = () => {
  return (
    <AmountOfFeesWrapper>
      <TitleText>Amount of fees</TitleText>
      <Table>
        <Row>
          <TableHeader>Year</TableHeader>
          <TableHeader>Cost center</TableHeader>
          <TableHeader>Total amount</TableHeader>
          <TableHeader>Law firm</TableHeader>
        </Row>

        <Row>
          <Column>2019</Column>
          <Column>CS 153</Column>
          <Column>3500 PLN</Column>
          <Column>Clifford</Column>
        </Row>

        <Row>
          <Column>2018</Column>
          <Column>CS 153 </Column>
          <Column>9500 PLN</Column>
          <Column>Linklaters</Column>
        </Row>

        <Row>
          <Column>2017</Column>
          <Column>CS 47 </Column>
          <Column>1100 PLN</Column>
          <Column>Linklaters</Column>
        </Row>

        <Row>
          <Column></Column>
          <Column>CS 153 </Column>
          <Column>2 PLN</Column>
          <Column>Linklaters</Column>
        </Row>
      </Table>
      {/* <CustomInput></CustomInput> */}
    </AmountOfFeesWrapper>
    // https://pl.reactjs.org/docs/forms.html
    // https://blog.logrocket.com/8-awesome-features-of-styled-components/
  );
};
