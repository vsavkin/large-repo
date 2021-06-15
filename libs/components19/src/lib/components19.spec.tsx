import { render } from '@testing-library/react';

import Components19 from './components19';

describe('Components19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components19 />);
    expect(baseElement).toBeTruthy();
  });
});
