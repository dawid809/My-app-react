import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const InternalReviewsWrapper = styled.div`
  border-bottom: 1px solid ${Colors.lightGray};
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

const LinkText = styled.h3`
  margin-top: 5px;
  color: ${Colors.lightBlue};
  text-align: right;
  margin: 5px 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const InternalReviews: FC = () => {
  return (
    <InternalReviewsWrapper>
      <TitleText>Internal reviews</TitleText>
      <Table>
        <Row>
          <TableHeader>Name</TableHeader>
          <TableHeader>Entity</TableHeader>
          <TableHeader>Location</TableHeader>
          <TableHeader>Expertise</TableHeader>
          <TableHeader>Date</TableHeader>
        </Row>

        <Row>
          <Column>Operation Tictac</Column>
          <Column>Renault</Column>
          <Column>USA</Column>
          <Column>#Tax</Column>
          <Column>21/02/2018</Column>
        </Row>

        <Row>
          <Column>Operation Prometheus</Column>
          <Column>Renault</Column>
          <Column>France</Column>
          <Column>#M&A</Column>
          <Column>18/02/2019</Column>
        </Row>

        <Row>
          <Column>Operation Latandre</Column>
          <Column>Renault</Column>
          <Column>Italia</Column>
          <Column>#Social</Column>
          <Column>18/02/2019</Column>
        </Row>
      </Table>
      <LinkText>See more Reviews</LinkText>
    </InternalReviewsWrapper>
  );
};
