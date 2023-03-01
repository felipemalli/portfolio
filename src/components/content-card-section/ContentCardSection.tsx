import { moveScreenToCenterOfId } from '../../utils/moveScreenToCenterOfId';
import { BottonContentCard } from './BottonContentCard';
import { ChangeAreaButtons } from './particular/changeAreaButtons';
import { SearchBar } from './particular/SearchBar';
import { TopContentCard } from './TopContentCard';

export const ContentCardSection: React.FC = () => {
  return (
    <section id='content' className='relative' onClick={(e) => moveScreenToCenterOfId(e, 'content')}>
      <TopContentCard></TopContentCard>
      <ChangeAreaButtons />
      <SearchBar></SearchBar>
      <BottonContentCard></BottonContentCard>
    </section>
  );
};
