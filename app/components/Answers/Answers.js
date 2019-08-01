/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Typography } from 'antd';

export const Answers = ({ answers, onAnswer, commentN, onNext }) => {
  return (
    <Wrapper>
      <List
        bordered
        dataSource={answers}
        renderItem={(item, i) => (
          <List.Item
            onClick={() => (commentN ? null : onAnswer(i, item.points))}
          >
            {item.text}
          </List.Item>
        )}
      />
      {!!commentN && <div>{'1'}</div>}
      {!!commentN && <button onClick={onNext}>Next</button>}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Answers.propTypes = {};
