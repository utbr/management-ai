package com.student.management.config;

import com.student.management.service.CustomUserDetailsService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    private final CustomUserDetailsService customUserDetailsService;

    public SecurityConfiguration(CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())  // Desabilita CSRF para facilitar testes
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/signup", "/routine/**").permitAll()  // Permite acesso sem autenticação a esses endpoints
                        .anyRequest().authenticated()  // Exige autenticação para qualquer outro endpoint
                )
                .formLogin(form -> form
                        .loginPage("/login")  // Configuração para a página de login personalizada, se necessário
                        .loginProcessingUrl("/login")  // URL para o processo de login
                        .permitAll()  // Permite o acesso ao login sem autenticação
                        .successHandler((request, response, authentication) ->
                                response.setStatus(HttpServletResponse.SC_OK)  // Sucesso no login
                        )
                        .failureHandler((request, response, exception) ->
                                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED)  // Falha no login
                        )
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")  // URL para o logout
                        .logoutSuccessHandler((request, response, authentication) ->
                                response.setStatus(HttpServletResponse.SC_OK)  // Sucesso no logout
                        )
                        .invalidateHttpSession(true)  // Invalida a sessão
                        .deleteCookies("JSESSIONID")  // Exclui o cookie de sessão
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Criptografa senhas com BCrypt
    }

    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(customUserDetailsService)  // Serviço de detalhes de usuário
                .passwordEncoder(passwordEncoder())  // Codificador de senha
                .and()
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));  // Permite acesso do frontend React
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));  // Permite os métodos HTTP necessários
        configuration.setAllowedHeaders(Arrays.asList("*"));  // Permite todos os cabeçalhos
        configuration.setAllowCredentials(true);  // Permite o uso de credenciais

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);  // Configura o CORS para todos os endpoints
        return source;
    }
}
