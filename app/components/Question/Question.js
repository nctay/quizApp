/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Question = ({ text, img }) => {
  return (
    <Wrapper>
      <h1>{text}</h1>
      <img src={img} alt="pic" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Question.propTypes = {};
