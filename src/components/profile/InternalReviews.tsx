import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { useFormik } from "formik";

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
width: 100%;
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

const EditButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: none;
`;

const EditWrapper = styled.div`
  width: 22px;
  height: 22px;
  right: 15px;
  top: 15px;
  display: flex;
`;

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  display: flex;
`;

const CustomInput = styled.input.attrs({
  type: "text",
})`
  font-size: 15px;
  line-height: 1.3;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${Colors.gray};
  &:focus {
    background: #f3eaea;
    outline: none;
  }
  &:hover {
    transform: 1.2;
    background: #e4d0d0;
    outline: none;
  }
`;

export const InternalReviews: FC = () => {

  const formikTable = useFormik({
    initialValues: {
      rowone: {
        name: ["Operation Latandre"],
        entity: ["Renault"],
        location: ["USA"],
        expertise: ["#Tax"],
        date: ["21/02/2018"],
      },
      rowtwo: {
        name: ["Operation Prometheus"],
        entity: ["Audi"],
        location: ["France"],
        expertise: ["#M&A"],
        date: ["18/02/2019"],
      },
      rowthree: {
        name: ["Operation Latandre"],
        entity: ["BMW"],
        location: ["Italia"],
        expertise: ["#Social"],
        date: ["18/02/2019"],
      },
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [internalReviewsEnabled, setInternalReviewsEnabled] = useState(false);

  const editInternalReviewsTable = () => {
    const disable = internalReviewsEnabled;
    setInternalReviewsEnabled(!disable);
  };

  return (
    <InternalReviewsWrapper>
      <EditWrapper>
      <EditButton onClick={editInternalReviewsTable} type="submit">
          <EditIcon src="icons/pen.png" />
        </EditButton>
      </EditWrapper>
      <TitleText>Internal reviews</TitleText>
      <form onSubmit={formikTable.handleSubmit}>
        <Table>
          <Row>
            <TableHeader>Name</TableHeader>
            <TableHeader>Entity</TableHeader>
            <TableHeader>Location</TableHeader>
            <TableHeader>Expertise</TableHeader>
            <TableHeader>Date</TableHeader>
          </Row>
          {internalReviewsEnabled? (
            <>
              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.name"
                    defaultValue={formikTable.values.rowone.name}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.entity"
                    defaultValue={formikTable.values.rowone.entity}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.location"
                    defaultValue={formikTable.values.rowone.location}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.expertise"
                    defaultValue={formikTable.values.rowone.expertise}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.date"
                    defaultValue={formikTable.values.rowone.date}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>

              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.name"
                    defaultValue={formikTable.values.rowtwo.name}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.entity"
                    defaultValue={formikTable.values.rowtwo.entity}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.location"
                    defaultValue={formikTable.values.rowtwo.location}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.expertise"
                    defaultValue={formikTable.values.rowtwo.expertise}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.date"
                    defaultValue={formikTable.values.rowtwo.date}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>

              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.name"
                    defaultValue={formikTable.values.rowthree.name}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.entity"
                    defaultValue={formikTable.values.rowthree.entity}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.location"
                    defaultValue={formikTable.values.rowthree.location}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.expertise"
                    defaultValue={formikTable.values.rowthree.expertise}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.date"
                    defaultValue={formikTable.values.rowthree.date}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Column>{formikTable.values.rowone.name}</Column>
                <Column>{formikTable.values.rowone.entity}</Column>
                <Column>{formikTable.values.rowone.location}</Column>
                <Column>{formikTable.values.rowone.expertise}</Column>
                <Column>{formikTable.values.rowone.date}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowtwo.name}</Column>
                <Column>{formikTable.values.rowtwo.entity}</Column>
                <Column>{formikTable.values.rowtwo.location}</Column>
                <Column>{formikTable.values.rowtwo.expertise}</Column>
                <Column>{formikTable.values.rowtwo.date}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowthree.name}</Column>
                <Column>{formikTable.values.rowthree.entity}</Column>
                <Column>{formikTable.values.rowthree.location}</Column>
                <Column>{formikTable.values.rowthree.expertise}</Column>
                <Column>{formikTable.values.rowthree.date}</Column>
              </Row>
            </>
          )}
        </Table>
      </form>
      <LinkText>See more reviews</LinkText>
    </InternalReviewsWrapper>
  );
};
