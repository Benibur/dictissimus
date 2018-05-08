import React from 'react'
import Icon from 'cozy-ui/react/Icon'
import { translate } from 'cozy-ui/react/I18n'
import { NavLink } from 'react-router-dom'
import NavIcon from '../assets/icons/icon-bullet-point.svg'

export const Sidebar = ({ t }) => (
  <aside className="o-sidebar">
    <nav>
      <ul className="c-nav">

        <li className="c-nav-item">
          <NavLink
            to="/viewScores"
            className="c-nav-link"
            activeClassName="is-active"
          >
            <Icon className="c-nav-icon" icon={NavIcon} />
            {t('Nav.scores_nav_1')}
          </NavLink>
        </li>

        <li className="c-nav-item">
          <NavLink
            to="/viewDictation"
            className="c-nav-link"
            activeClassName="is-active"
          >
            <Icon className="c-nav-icon" icon={NavIcon} />
            {t('Nav.dictation_nav_2')}
          </NavLink>
        </li>

        <li className="c-nav-item">
          <NavLink
            to="/viewDictionnaries"
            className="c-nav-link"
            activeClassName="is-active"
          >
            <Icon className="c-nav-icon" icon={NavIcon} />
            {t('Nav.dictionnaries_nav_3')}
          </NavLink>
        </li>

      </ul>
    </nav>
  </aside>
)

export default translate()(Sidebar)
