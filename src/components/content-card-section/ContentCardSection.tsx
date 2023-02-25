import { BottonContentCard } from './BottonContentCard';
import { ChangeAreaButtons } from './particular/changeAreaButtons';
import { SearchBar } from './particular/SearchBar';
import { TopContentCard } from './TopContentCard';

export const ContentCardSection: React.FC = () => {
  return (
    <section id='content' className='relative mt-36 md:mt-0'>
      <TopContentCard></TopContentCard>
      <ChangeAreaButtons />
      <SearchBar></SearchBar>
      <BottonContentCard></BottonContentCard>
    </section>
  );
};
