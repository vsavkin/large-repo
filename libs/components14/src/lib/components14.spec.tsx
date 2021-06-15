import { render } from '@testing-library/react';

import Components14 from './components14';

describe('Components14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components14 />);
    expect(baseElement).toBeTruthy();
  });
});
