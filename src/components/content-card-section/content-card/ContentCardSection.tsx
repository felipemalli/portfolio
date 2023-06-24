import { useMediaQuery } from 'react-responsive';
import { breakpoints, moveScreenToCenterOfId } from '../../../utils';
import { ChangeAreaButtons } from '../search/ChangeAreaButtons';
import { SearchBar } from '../search/SearchBar';
import { BottonContentCard } from './BottonContentCard';
import { TopContentCard } from './TopContentCard';

export const ContentCardSection: React.FC = () => {
  const isSmallHeight = useMediaQuery(breakpoints.smallHeight);

  return (
    <section id='content' className='mt-5 md:mt-0 relative' onClick={(e) => isSmallHeight && moveScreenToCenterOfId(e, 'content')}>
      <TopContentCard></TopContentCard>
      <ChangeAreaButtons />
      <SearchBar></SearchBar>
      <BottonContentCard></BottonContentCard>
    </section>
  );
};
