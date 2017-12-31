VAGRANTFILE_API_VERSION = '2'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = 'azure'

  # use local ssh key to connect to remote vagrant box
  config.ssh.username = 'vagrant'
  config.ssh.private_key_path = '~/.ssh/id_rsa'
  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.provider :azure do |azure|
    # each of the below values will default to use the env vars named as below if not specified explicitly
    azure.tenant_id = "01ae8f28-d570-4c1d-ad8e-c56ae38a1829"
    azure.client_id = "234bc795-a4d9-4831-9e2b-7fe89f89f8a1"
    azure.client_secret = "4c37c8d2-bb77-467d-8201-84941a2580e6"
    azure.subscription_id = "4ee3d561-ed6e-46db-a8da-954fac53f356"
  end

  # configuration of ansible
  config.vm.provision :ansible do |ansible|
    ansible.playbook = "provision/ansible.yml"
  end

end
