import { NavigationContainer } from '@react-navigation/native';

import { typedEntries } from '@common/helpers/GeneralHelper';
import { useAppDispatch } from '@common/hooks/AppHook';
import { BiometricContext } from '@common/hooks/BiometricHook';
import {
  AuthenticationParamList,
  AuthenticationRoute,
} from '@domains/authentication/routes/AuthenticationRoute';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeeplinkConfig } from '@src/config/DeeplinkConfig';
import { useFetchLoggedInUserHook } from '@src/hooks/queries/FetchLoggedInUserHook';
import { AuthenticatedRoute } from '@src/router/AuthenticatedRoute';

import {
  useHasSignedIn,
  useLoggedInUser,
} from '@domains/authentication/stores/AuthSelector';
import {
  setLoggedInUser,
  setPermissions,
} from '@domains/authentication/stores/AuthSlice';
import { useHasEnabledBiometric } from '@src/stores/main-state/Selector';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationParamList>();

export const RootRoutes: React.FC = () => {
  const { data } = useFetchLoggedInUserHook();
  const dispatch = useAppDispatch();
  const biometric = useContext(BiometricContext);
  const isSignedIn = useHasSignedIn();
  const loggedInUser = useLoggedInUser();
  const isBiometricEnabled = useHasEnabledBiometric();

  const { i18n } = useTranslation();

  useEffect(() => {
    if (data != null) {
      dispatch(setLoggedInUser(data.user));
      dispatch(
        setPermissions([
          ...data.permissions,
          // manually inject in app permissions
          { id: 0, name: 'view in app permissions' },
        ]),
      );
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (loggedInUser?.language == null) {
      return;
    }

    i18n.changeLanguage(loggedInUser.language);
  }, [i18n, loggedInUser]);

  return (
    <NavigationContainer linking={DeeplinkConfig}>
      {isSignedIn && (!isBiometricEnabled || biometric.isAuthenticated) ? (
        <AuthenticatedRoute />
      ) : (
        <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
          {typedEntries(AuthenticationRoute).map(([name, component]) => (
            <AuthenticationStack.Screen
              key={name}
              name={name}
              component={component}
            />
          ))}
        </AuthenticationStack.Navigator>
      )}
    </NavigationContainer>
  );
};
