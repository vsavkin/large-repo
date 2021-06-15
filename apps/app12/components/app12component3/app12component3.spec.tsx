import { render } from '@testing-library/react';

import App12component3 from './app12component3';

describe('App12component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component3 />);
    expect(baseElement).toBeTruthy();
  });
});
