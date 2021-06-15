import { render } from '@testing-library/react';

import App12component12 from './app12component12';

describe('App12component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component12 />);
    expect(baseElement).toBeTruthy();
  });
});
