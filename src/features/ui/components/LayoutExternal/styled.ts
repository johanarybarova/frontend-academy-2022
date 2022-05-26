import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100%;
  text-align: center;

  ${mq.medium} {
    flex-direction: row;
    text-align: start;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 0 2rem;

  ${mq.medium} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    flex: 3;
  }

  &::after {
    flex: 4;
  }
`
