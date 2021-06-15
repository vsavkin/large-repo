import { render } from '@testing-library/react';

import App13component19 from './app13component19';

describe('App13component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component19 />);
    expect(baseElement).toBeTruthy();
  });
});
