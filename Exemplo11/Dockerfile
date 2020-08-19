FROM exemplo6

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh", "-c"]

# Passa primeiro valor do array para o ENTRYPOINT

# nada
#CMD ["cat", "-n", "/var/log/bootstrap.log"]

# ok
#CMD ["cat -n  /var/log/bootstrap.log"] 

# nada, executa /bin/sh -c , ver docker history
#CMD "cat -n /var/log/bootstrap.log"

# nada, executa /bin/sh -c , ver docker history
CMD cat -n /var/log/bootstrap.log