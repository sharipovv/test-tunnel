import { FC, useEffect } from 'react';
import { Button, Div, Gallery, Group, Header, NavIdProps, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PersikImage from '../assets/persik.png';

export const Persik: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  const params = useParams<'id'>()
  useEffect(() => {
    console.log('new params', params);
  }, [params])

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Persik
      </PanelHeader>
      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button
            stretched
            size="l"
            mode="secondary"
            onClick={() => routeNavigator.push('/persik/' + Date.now())}>
            Покажите Персика, пожалуйста!
          </Button>
        </Div>
      </Group>
      <Gallery />
      <Placeholder>
        <img width={230} src={PersikImage} alt="Persik The Cat" />
      </Placeholder>
    </Panel>
  );
};
