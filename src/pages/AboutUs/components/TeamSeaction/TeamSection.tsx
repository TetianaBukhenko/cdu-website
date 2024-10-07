import { useEffect, useMemo, useState } from 'react';
import styles from './TeamSection.module.scss';
import { TeamMember } from '../../../../types/TeamMember';
import { team as team1 } from '../../../../services/team';
import { useWidth } from '../../../../hooks/useWidth';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { loadTeam } from '../../../../features/teamSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { Loader } from '../../../../components/Loader';
import { Error } from '../../../../components/Error';

export const TeamSection = () => {
  const [showAllTeam, setShowAllTeam] = useState(false);
  const { team, loading, error } = useAppSelector(state => state.team);

  const width = useWidth();

  const dispath = useAppDispatch();

  const itemsPerPage = useMemo(() => {
    if (width >= 1240) {
      return 3;
    } else {
      return 2;
    }
  }, [width, team]);
  const visibleTeam = useMemo(() => team.slice(0, itemsPerPage), [width, team]);
  const restOfTeam = useMemo(() => team.slice(itemsPerPage), [width, team]);

  useEffect(() => {
    dispath(loadTeam());
  }, []);

  console.log(team);

  return (
    <section className={styles.container}>
      <h2 className={`${styles.header} heading--h2`}>Our Team</h2>
      {loading && <Loader />}
      {error.length > 0 && <Error errorText={error} />}

      {error.length === 0 && !loading && (
        <>
          <div className={styles.team}>
            {visibleTeam.map(person => {
              const { id, image, name, position } = person;

              return (
                <article className={styles.article} key={id}>
                  <img
                    className={styles.article__img}
                    loading="lazy"
                    src={image}
                    alt={name}
                  />
                  <p className={`${styles.article__name} heading--h3`}>
                    {name}
                  </p>
                  <p className={styles.article__text}>{position}</p>
                </article>
              );
            })}
          </div>
          <div
            className={classNames(`${styles.team__rest} ${styles.team}`)}
            style={{
              maxHeight: `${showAllTeam ? Math.ceil(restOfTeam.length / itemsPerPage) * 600 : 0}px`,
            }}
          >
            {restOfTeam.map(person => {
              const { id, image, name, position } = person;

              return (
                <article className={styles.article} key={id}>
                  <img
                    className={styles.article__img}
                    loading="lazy"
                    src={image}
                    alt={name}
                  />
                  <p className={`${styles.article__name} heading--h3`}>
                    {name}
                  </p>
                  <p className={styles.article__text}>{position}</p>
                </article>
              );
            })}
          </div>
          <button
            className="button button--transparent"
            disabled={team.length <= visibleTeam.length || error.length !== 0}
            onClick={() => {
              setShowAllTeam(prevState => !prevState);
            }}
          >
            {`${showAllTeam ? 'SEE LESS' : 'SEE ALL'} `}
          </button>
        </>
      )}
    </section>
  );
};