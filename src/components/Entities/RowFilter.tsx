import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";

import {Colors} from '../../helpers/Colors'
import CloseIcon from '../../assets/icons/icons8-macos-close-32.png'

const Wrapper = styled.tr`
  display: flex;
  margin: 0.2em 0;
`;

const Column = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.6em;
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    margin: 0;
    padding: .5em;

    > img {
        width: 25px;
        height: 25px;
    }
`;

const Select = styled.select`
    border: none;
    background: transparent;
    margin: 0;
    font-size: 1em;
`;

const InputField = styled.input`
    border: none;
    background-color: #e6e6e6;
    margin: 0;
    padding: .6em .3em;
    border-radius: 6px;
`;

interface RowFilterProps {
    type: string;
}

const RowFilter: React.FC<RowFilterProps> = (props) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(true);

  const entityRelationHandle = (event: any): void => {
    setShowDetails(event.target.value !== "contains");
  };

  const closeButtonHandle = (): void => setShowFilter(false);

  return (
    <>
      {showFilter && (
        <Wrapper>
          <Column>
            <CloseButton onClick={closeButtonHandle}>
                <img src={CloseIcon} alt="Close row" />
            </CloseButton>
          </Column>

          <Column>{props.type}</Column>

          <Column>
            <Select>
              <option value="1">Company</option>
              <option value="2">Status</option>
            </Select>
          </Column>

          <Column>
            <Select onChange={entityRelationHandle}>
              <option value="contains">Contains</option>
              <option value="is">Is</option>
              <option value="endsBefore">Ends before</option>
            </Select>
          </Column>

          <Column>
            <InputField type="text" placeholder="Type..." />
          </Column>

          {showDetails && (
            <React.Fragment>
              <Column>
                <Select>
                  <option value="1">In</option>
                  <option value="2">Not</option>
                </Select>
              </Column>

              <Column>
                <InputField type="text" placeholder="Entity..." />
              </Column>
            </React.Fragment>
          )}
        </Wrapper>
      )}
    </>
  );
};
export default RowFilter;
