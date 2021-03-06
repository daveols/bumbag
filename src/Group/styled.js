import Group from 'reakit/Group';
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';

export default styled(Group)`
  & > * {
    border-radius: 4px;
  }

  & {
    ${theme('group.base')};
  }
`;
