import { render } from '@testing-library/react';

import App12component19 from './app12component19';

describe('App12component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component19 />);
    expect(baseElement).toBeTruthy();
  });
});
