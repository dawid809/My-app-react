import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";
//import { Select, Descriptions, Upload, Button } from "antd";
//import "antd/dist/antd.css";
//import "antd/es/style/index.css";
import Select from 'react-select';

//import { colourOptions } from '../data';
// import 'antd/lib/style/dark.less';
// import "antd/lib/select/style/index.css";
// import "antd/lib/dropdown/style/index.css";
// import "antd/lib/descriptions/style/index.css";
// import "antd/dist/antd.less";


import { Colors } from "../../styledHelpers/Colors";
import { PanelInformations } from "./PanelInformations";
import { InternalCorrespondants } from "./InternalCorrespondants";
import { Proposals } from "./table/Proposals";
import { InternalReviews } from "./table/InternalReviews";
import { AmountOfFees } from "./table/AmountOfFees";
import { fontSize } from "../../styledHelpers/FontSizes";
// import { getUsers } from "../../actions/usersActions";
// import { getPhotos } from "../../actions/photosActions";

// import { useSelector } from "react-redux";
// import { IState } from "../../reducers";
// import { IUsersReducer } from "../../reducers/usersReducers";
// import { IPhotosReducer } from "../../reducers/photosReducer";

// type GetUsers = ReturnType<typeof getUsers>;
// type GetPhotos = ReturnType<typeof getPhotos>;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  display: flex;
`;

const UserExperienceWrapper = styled.div`
  border-bottom: 1px solid ${Colors.lightGray};
  padding: 10px;
  position: relative;
`;

const TextWithBackground = styled.h3`
  background: ${Colors.lightBlueBackground};
  color: ${Colors.lightBlue};
  padding: 10px 10px;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  display: table;
  display: inline-block;
  font-size: ${fontSize[14]};
`;

const GrayText = styled.h3`
  color: ${Colors.darkerGray};
  margin: 10px 5px;
  font-size: 1.1em;
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
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
`;

interface IProps {
  formikSelectOptionsEnabled?: boolean
}


// interface ColourOption {
//   readonly value: string;
//    label: string;
// }

//  const colourOptions:  ColourOption[] = [
//   { value: 'cybersecurity', label: 'Cybersecurity'},
//   { value: 'cloudComputing', label: 'Cloud computing'},
//   { value: 'projectManagement', label: 'Project management'},
//   { value: 'softwareDevelopment', label: 'Software development'},
//   { value: 'networkingAndWireless', label: 'Networking and wireless'},
//   { value: 'mergers', label: 'Mergers',},
// ];


 interface ColourOption {
   label: string;
}

const options = [
  { value: 1, label: 'Chocolate' },
  { value: 2, label: 'Strawberry' },
  { value: 3, label: 'Vanilla' }
]


 const colourOptions:  string[] = [
  'Cybersecurity',
    'Cloud computing',
   'Project management',
    'Software development',
     'Networking and wireless',
    'Mergers',
];
export const RestUserInfo: FC<IProps> = (props) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch<GetUsers>(getUsers());
  //   dispatch<GetPhotos>(getPhotos());
  // }, []);

  // const { usersList, photosList } = useSelector<
  //   IState,
  //   IUsersReducer & IPhotosReducer
  // >((globalState) => ({
  //   ...globalState.users,
  //   ...globalState.photos,
  // }));
{console.log(props)}

  const expertise: string[] = [
    "Cybersecurity",
    "Cloud computing",
    "Project management",
    "Software development",
    "Networking and wireless",
    "Mergers",
  ];

  const specialities: string[] = [
    "Computer programmer",
    "Quality assurance tester ",
    "Web developer",
    "IT technician",
    "Systems analyst",
    "Network engineer",
    "Database administrator",
    "Computer scientist",
    "Software engineer",
  ];

  const admission: string[] = [
    "Paris bar association",
    "Tunisian bar association",
    "Warsaw bar association",
    "Prague bar association",
    "Lions bar association",
  ];

  const countries: string[] = [
    "Poland",
    "Germany",
    "China",
    "Ireland",
    "Japan",
    "Greece",
    "Russia",
    "Italy",
    "The USA",
    "Sweden",
  ];

  const [formikSelectOptionsEnabled, setFormikSelectOptionsEnabled] =
    useState<boolean>(false);

    console.log('formiksele',formikSelectOptionsEnabled)
    console.log('setformik',setFormikSelectOptionsEnabled);

  const editSelectOptionHandle = () => {
    const disable = formikSelectOptionsEnabled;
    setFormikSelectOptionsEnabled(!disable);
  };

  const formikSelectOption = useFormik({
    initialValues: {
      colourOptions:  ["Cybersecurity"],
      options: ["Chocolate","asdasd"],
      admission: ["Paris bar association"],
      countries: ["Poland"],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const Option = Select;

  // const state = {
  //  selectedItems: arr = [];
  // };
 
  
  const [state, setState] = useState({ selectedOption: null });
const [displaySelectedValue, setValue] = useState<any | null>(null);

const DisplayValueHandle = (e: any) => {
 setValue(Array.isArray(e) ? e.map ( x => x.label):[])
}
  //  state = {
  //   selectedOption: null,
  // };
   const handleChange = (selectedOption: any) => {
    setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  // function onSelectedItemsChange = (selectedItems: []) => {
  //  setState({ selectedItems });
  // };

  return (
    <UserWrapper>
      <form onSubmit={formikSelectOption.handleSubmit}>
        <UserExperienceWrapper>
          <EditWrapper>
            <EditButton onClick={editSelectOptionHandle} type="submit">
              <EditIcon src="icons/pen.png" />
            </EditButton>
          </EditWrapper>

          <GrayText>Expertise</GrayText>
          {formikSelectOptionsEnabled ? (
      <div>
          <Select
          isMulti
          closeMenuOnSelect={false}
          options={options}
          placeholder={'Select options'}
         
          // value={formikSelectOption.values.options}
          onChange={handleChange}
          
          // onChange={(values) => {
          //   formikSelectOption.setFieldValue("options", values);
          // }}
          defaultValue={options[0]}
         
          >
          
   </Select>
   <div>
   <TextWithBackground> {displaySelectedValue} </TextWithBackground>
   </div>
   </div>
   
    ) : (
      
      <div>
           {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}> */}
        {/* {options.map((option) => ( */}
      
          {/* // <TextWithBackground key={option.value}>{option.label}</TextWithBackground>
          <TextWithBackground key={options.length}>{selectedValue}</TextWithBackground>} */}
      {/* {formikSelectOption.values.options.map((item) => (
                <TextWithBackground key={i++}>{item}</TextWithBackground>
              ))} */}
     <TextWithBackground> {displaySelectedValue} </TextWithBackground>
        </div>


      )}
         
        </UserExperienceWrapper>
      </form>
      {/* <PanelInformations /> */}
      <PanelInformations editSelectOptionHandle={editSelectOptionHandle}
    />
      <InternalCorrespondants />
      <Proposals />

      <InternalReviews />

      <AmountOfFees/>
    </UserWrapper>
  );
};
{/* <div>
 {formikSelectOption.values.expertise.map((item) => (
 <TextWithBackground key={item}>{item}</TextWithBackground>
))}
</div>  */}