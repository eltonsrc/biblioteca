package br.org.am.biblioteca.rest.security;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.web.filter.authc.BasicHttpAuthenticationFilter;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.stereotype.Component;

/**
 * Classe criada para sobrescrever comportamento do shiro de fazer
 * request/challenge do login e senha(Browsers abrem uma popup pedindo login e
 * senha).
 * 
 */
@Component
public class AuthenticationFilter extends BasicHttpAuthenticationFilter {
    @Override
    protected boolean sendChallenge(ServletRequest request, ServletResponse response) {
        HttpServletResponse httpResponse = WebUtils.toHttp(response);
        httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        return false;
    }
}
