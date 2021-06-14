import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../../styledHelpers/Colors";
import { fontSize } from "../../../styledHelpers/FontSizes";
import { useFormik } from "formik";

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
  width: 100%;
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
  top: 5px;
  display: flex;
  position: absolute;
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

export const AmountOfFees: FC = () => {
  const formikTable = useFormik({
    initialValues: {
      rowone: {
        year: ["2019"],
        costCenter: ["CS 153"],
        totalAmount: ["3500 PLN"],
        lawFirm: ["Clifford"],
      },
      rowtwo: {
        year: ["2018"],
        costCenter: ["CS 153"],
        totalAmount: ["9500 PLN"],
        lawFirm: ["Linklaters"],
      },
      rowthree: {
        year: ["2017"],
        costCenter: ["CS 47"],
        totalAmount: ["1100 PLN"],
        lawFirm: ["Lidll"],
      },
      rowfour: {
        year: [""],
        costCenter: ["CS 666"],
        totalAmount: ["2 złote"],
        lawFirm: ["Zapka"],
      },
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [amountOfFeesEnabled, setAmountOfFeesEnabled] = useState(false);

  const editAmountOfFeesTable = () => {
    const disable = amountOfFeesEnabled;
    setAmountOfFeesEnabled(!disable);
  };

  return (
    <AmountOfFeesWrapper>
      <div
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <TitleText>Amount of fees</TitleText>
        <EditWrapper>
          <EditButton onClick={editAmountOfFeesTable} type="submit">
            <EditIcon src="icons/pen.png" />
          </EditButton>
        </EditWrapper>
      </div>
      <form onSubmit={formikTable.handleSubmit}>
        <Table>
          <Row>
            <TableHeader>Year</TableHeader>
            <TableHeader>Cost center</TableHeader>
            <TableHeader>Total amount</TableHeader>
            <TableHeader>Law firm</TableHeader>
          </Row>
          {amountOfFeesEnabled ? (
            <>
              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.year"
                    defaultValue={formikTable.values.rowone.year}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.costCenter"
                    defaultValue={formikTable.values.rowone.costCenter}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.totalAmount"
                    defaultValue={formikTable.values.rowone.totalAmount}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.lawFirm"
                    defaultValue={formikTable.values.rowone.lawFirm}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>

              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.year"
                    defaultValue={formikTable.values.rowtwo.year}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.costCenter"
                    defaultValue={formikTable.values.rowtwo.costCenter}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.totalAmount"
                    defaultValue={formikTable.values.rowtwo.totalAmount}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.lawFirm"
                    defaultValue={formikTable.values.rowtwo.lawFirm}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>

              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.year"
                    defaultValue={formikTable.values.rowthree.year}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.costCenter"
                    defaultValue={formikTable.values.rowthree.costCenter}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.totalAmount"
                    defaultValue={formikTable.values.rowthree.totalAmount}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.lawFirm"
                    defaultValue={formikTable.values.rowthree.lawFirm}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>

              <Row>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowfour.year"
                    defaultValue={formikTable.values.rowfour.year}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowfour.costCenter"
                    defaultValue={formikTable.values.rowfour.costCenter}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowfour.totalAmount"
                    defaultValue={formikTable.values.rowfour.totalAmount}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
                <Column>
                  {" "}
                  <CustomInput
                    name="rowfour.lawFirm"
                    defaultValue={formikTable.values.rowfour.lawFirm}
                    type="text"
                    onChange={formikTable.handleChange}
                  />
                </Column>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Column>{formikTable.values.rowone.year}</Column>
                <Column>{formikTable.values.rowone.costCenter}</Column>
                <Column>{formikTable.values.rowone.totalAmount}</Column>
                <Column>{formikTable.values.rowone.lawFirm}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowtwo.year}</Column>
                <Column>{formikTable.values.rowtwo.costCenter}</Column>
                <Column>{formikTable.values.rowtwo.totalAmount}</Column>
                <Column>{formikTable.values.rowtwo.lawFirm}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowthree.year}</Column>
                <Column>{formikTable.values.rowthree.costCenter}</Column>
                <Column>{formikTable.values.rowthree.totalAmount}</Column>
                <Column>{formikTable.values.rowthree.lawFirm}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowfour.year}</Column>
                <Column>{formikTable.values.rowfour.costCenter}</Column>
                <Column>{formikTable.values.rowfour.totalAmount}</Column>
                <Column>{formikTable.values.rowfour.lawFirm}</Column>
              </Row>
            </>
          )}
        </Table>
      </form>
    </AmountOfFeesWrapper>
  );
};
