const t=JSON.parse('{"key":"v-e6f7cb8e","path":"/posts/2017-10-18-light_cat_e8-c-epon_admin.html","title":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)","lang":"zh-CN","frontmatter":{"title":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)","date":"2017-10-18T18:28:00.000Z","category":["网络"],"tag":["光猫"],"order":-7,"description":"为什么要获得光猫超级密码？ 它可以用于端口映射（eMule high ID）和桥接模式（路由器掌控拨号，但不兼容固定电话）。网上关于光猫超级密码的获取攻略大多是在 2012-14 年发布的，现在已经不能使用了。 破解测试环境 运营商：上海电信 光猫型号：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S 光猫超级密码破解 地址栏输入 192.168.1.1，用户名：&lt;光猫背面&gt;，密码：&lt;光猫背面&gt;，登录管理界面。 在浏览器地址栏输入 192.168.1.1/backupsettings.txt，将 backupsettings.txt 文件导出并备份在电脑上。如果无法打开，请改为输入 192.168.1.1/backupsettings.conf，并做好备份。 打开下载的 backupsettings.txt 或 backupsettings.conf 文件，搜索 TeleComAccount，两个 password 之间就是超级密码。超级账号是 telecomadmin。 输入地址 192.168.1.1，用刚获取的超级密码登录，然后可以进行端口映射和设备桥接。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2017-10-18-light_cat_e8-c-epon_admin.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)"}],["meta",{"property":"og:description","content":"为什么要获得光猫超级密码？ 它可以用于端口映射（eMule high ID）和桥接模式（路由器掌控拨号，但不兼容固定电话）。网上关于光猫超级密码的获取攻略大多是在 2012-14 年发布的，现在已经不能使用了。 破解测试环境 运营商：上海电信 光猫型号：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S 光猫超级密码破解 地址栏输入 192.168.1.1，用户名：&lt;光猫背面&gt;，密码：&lt;光猫背面&gt;，登录管理界面。 在浏览器地址栏输入 192.168.1.1/backupsettings.txt，将 backupsettings.txt 文件导出并备份在电脑上。如果无法打开，请改为输入 192.168.1.1/backupsettings.conf，并做好备份。 打开下载的 backupsettings.txt 或 backupsettings.conf 文件，搜索 TeleComAccount，两个 password 之间就是超级密码。超级账号是 telecomadmin。 输入地址 192.168.1.1，用刚获取的超级密码登录，然后可以进行端口映射和设备桥接。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-01T06:22:48.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"光猫"}],["meta",{"property":"article:published_time","content":"2017-10-18T18:28:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-01T06:22:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-10-18T18:28:00.000Z\\",\\"dateModified\\":\\"2023-06-01T06:22:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"为什么要获得光猫超级密码？","slug":"为什么要获得光猫超级密码","link":"#为什么要获得光猫超级密码","children":[]},{"level":2,"title":"破解测试环境","slug":"破解测试环境","link":"#破解测试环境","children":[]},{"level":2,"title":"光猫超级密码破解","slug":"光猫超级密码破解","link":"#光猫超级密码破解","children":[]}],"git":{"createdTime":1685600568000,"updatedTime":1685600568000,"contributors":[{"name":"Jich1123","email":"44639355+Jich1123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.09,"words":326},"filePathRelative":"_posts/2017-10-18-light_cat_e8-c-epon_admin.md","localizedDate":"2017年10月18日","excerpt":"<h2> 为什么要获得光猫超级密码？</h2>\\n<p>它可以用于端口映射（eMule high ID）和桥接模式（路由器掌控拨号，但不兼容固定电话）。网上关于光猫超级密码的获取攻略大多是在 2012-14 年发布的，现在已经不能使用了。</p>\\n<h2> 破解测试环境</h2>\\n<p>运营商：上海电信\\n光猫型号：贝尔 E8-C-EPON\\n硬件版本：RG201O-CA_V1A2\\n软件版本：E201OCAA2V11S</p>\\n<h2> 光猫超级密码破解</h2>\\n<ol>\\n<li>\\n<p>地址栏输入 <code>192.168.1.1</code>，用户名：&lt;光猫背面&gt;，密码：&lt;光猫背面&gt;，登录管理界面。</p>\\n<figure><img src=\\"https://pic1.zhimg.com/v2-9e43bc86b9095f3f6c2cfa4bd58dcd68_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>在浏览器地址栏输入 <code>192.168.1.1/backupsettings.txt</code>，将 <code>backupsettings.txt</code> 文件导出并备份在电脑上。如果无法打开，请改为输入 <code>192.168.1.1/backupsettings.conf</code>，并做好备份。</p>\\n</li>\\n<li>\\n<p>打开下载的 <code>backupsettings.txt</code> 或 <code>backupsettings.conf</code> 文件，搜索 <code>TeleComAccount</code>，两个 password 之间就是超级密码。超级账号是 <code>telecomadmin</code>。</p>\\n<figure><img src=\\"https://pic3.zhimg.com/v2-ee441dd18cc8e5f6303fdaef82b6d476_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>输入地址 <code>192.168.1.1</code>，用刚获取的超级密码登录，然后可以进行端口映射和设备桥接。</p>\\n<figure><img src=\\"https://pic1.zhimg.com/v2-31d6bb6b90be541c186a360fe2dd323c_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};
