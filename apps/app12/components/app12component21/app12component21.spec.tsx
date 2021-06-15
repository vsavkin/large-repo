import { render } from '@testing-library/react';

import App12component21 from './app12component21';

describe('App12component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component21 />);
    expect(baseElement).toBeTruthy();
  });
});
