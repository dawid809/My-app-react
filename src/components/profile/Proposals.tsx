import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { useFormik } from "formik";

const ProposalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${Colors.lightGray};
  border-bottom: 1px solid ${Colors.lightGray};
  padding: 10px;
`;

const TitleText = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  padding: 5px 0;
  margin-bottom: 15px;
`;

const LinkText = styled.h3`
  margin-top: 5px;
  color: ${Colors.lightBlue};
  text-align: right;
  margin: 5px 10px;
  font-weight: bold;
  cursor: pointer;
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

interface IProps {
  formikSelectOptionsEnabled?: boolean
}
export const Proposals: FC<IProps> = (formikSelectOptionsEnabled) => {
  
  const formikTable = useFormik({
    initialValues: {
      rowone: {
        name: ["Operation Tictac"],
        entity: ["Renault"],
        location: ["USA"],
        expertise: ["#Tax"],
        date: ["21/02/2018"],
        firm: ["Racine"],
      },
      rowtwo: {
        name: ["Operation Prometheus"],
        entity: ["Gulf"],
        location: ["France"],
        expertise: ["#M&A"],
        date: ["19/02/2018"],
        firm: ["Racine"],
      },
      rowthree: {
        name: ["Operation Titan"],
        entity: ["Szkoda"],
        location: ["Italy"],
        expertise: ["#Socical"],
        date: ["12/02/2018"],
        firm: ["Racine"],
      },
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const zmiennaBool = formikSelectOptionsEnabled.formikSelectOptionsEnabled;
  const [proposalsEnabled, setProposalsEnabled] = useState(false);
{console.log('zmiena',zmiennaBool)}
  const editProposalsTable = () => {
    const disable = proposalsEnabled;
    console.log('disable', formikSelectOptionsEnabled.formikSelectOptionsEnabled);
    setProposalsEnabled(!disable);
  };

  

  // <EditButton onClick={editProposalsTable} type="submit">
  return (
    <ProposalsWrapper>
      <EditWrapper>
      <EditButton onClick={editProposalsTable} type="submit">
          <EditIcon src="icons/pen.png" />
        </EditButton>
      </EditWrapper>
      <TitleText>Proposals</TitleText>
      <form onSubmit={formikTable.handleSubmit}>
        <Table>
          <Row>
            <TableHeader>Name</TableHeader>
            <TableHeader>Entity</TableHeader>
            <TableHeader>Location</TableHeader>
            <TableHeader>Expertise</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Firm</TableHeader>
          </Row>
          {proposalsEnabled? (
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
                <Column>
                  {" "}
                  <CustomInput
                    name="rowone.firm"
                    defaultValue={formikTable.values.rowone.firm}
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
                <Column>
                  {" "}
                  <CustomInput
                    name="rowtwo.firm"
                    defaultValue={formikTable.values.rowtwo.firm}
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
                <Column>
                  {" "}
                  <CustomInput
                    name="rowthree.firm"
                    defaultValue={formikTable.values.rowthree.firm}
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
                <Column>{formikTable.values.rowone.firm}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowtwo.name}</Column>
                <Column>{formikTable.values.rowtwo.entity}</Column>
                <Column>{formikTable.values.rowtwo.location}</Column>
                <Column>{formikTable.values.rowtwo.expertise}</Column>
                <Column>{formikTable.values.rowtwo.date}</Column>
                <Column>{formikTable.values.rowtwo.firm}</Column>
              </Row>
              <Row>
                <Column>{formikTable.values.rowthree.name}</Column>
                <Column>{formikTable.values.rowthree.entity}</Column>
                <Column>{formikTable.values.rowthree.location}</Column>
                <Column>{formikTable.values.rowthree.expertise}</Column>
                <Column>{formikTable.values.rowthree.date}</Column>
                <Column>{formikTable.values.rowthree.firm}</Column>
              </Row>
            </>
          )}
        </Table>
      </form>
      <LinkText>See more proposals</LinkText>
    </ProposalsWrapper>
  );
};


